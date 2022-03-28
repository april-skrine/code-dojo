class QuizzesController < ApplicationController

    skip_before_action :authorized_user, only: [:index]

    def index
        render json: Quiz.all, only: [:id, :quiz_name], include: [:questions, :answers], status: :ok
    end

    def show
        render json: Quiz.find(params[:id]), status: :ok
    end
end
