from django.shortcuts import render
from django.shortcuts import render, get_object_or_404, redirect
from .models import MainContent, Comment
from .forms import CommentForm
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied

# Create your views here.

def index(request):
    content_list = MainContent.objects.order_by('-pub_date')
    context = {'content_list':content_list}
    return render(request,'info_member/info_member.html', context)

def detail(request, content_id):
    content_list=MainContent.objects.get(id=content_id)
    context = {'content_list':content_list}
    return render(request, 'info_member/content_detail.html', context)

def comment_create(request, content_id):
     content_list = get_object_or_404(MainContent, pk=content_id)

     if request.method == 'POST':
         form = CommentForm(request.POST)
         if form.is_valid():
             comment = form.save(commit=False)
             comment.content_list = content_list
             comment.author = request.user
             comment.save()
             return redirect('detail', content_id=content_list.id)
     else:
        form = CommentForm()
     context = {'content_list': content_list, 'form': form}
     return render(request, 'info_member/content_detail.html', context)


@login_required(login_url='accounts:login')
def comment_update(request,comment_id):
    comment=get_object_or_404(Comment,pk=comment_id)

    if request.user!=comment.author:
        raise PermissionDenied

    if request.method=='POST':
        form=CommentForm(request.POST, instance=comment)
        if form.is_valid():
            comment=form.save(commeit=False)
            comment.save()
            return redirect('detail', content_id=comment.content_list.id)
    else:
        form=CommentForm(instance=comment)

    context={'comment':comment, 'form':form}
    return render(request, 'info_member/comment_form.html',context)

@login_required(login_url='accounts:login')
def comment_delete(request,comment_id):
    comment=get_object_or_404(Comment,pk=comment_id)

    if request.user != comment.author:
        raise PermissionDenied
    else:
        comment.delete()
    return redirect('detail', content_id=comment.content_list.id)