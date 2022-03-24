class QuestionsController < ApplicationController
    def index
        render json: Question.all, status: :ok
    end

    def show
        render json: Question.find(params[:id]), status: :ok
    end
end
