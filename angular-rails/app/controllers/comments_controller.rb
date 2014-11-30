class CommentsController < ApplicationController

  before_action do
    @post = Post.find(params[:post_id])
  end

  def create
    comment = @post.comments.create(comment_params)
    respond_with @post, comment
  end

  def upvote
    comment = @post.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with @post, comment
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end

end
