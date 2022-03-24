class AnswersController < ApplicationController
    def index
        render json: Answer.all, status: :ok
    end

    def show
        render json: Answer.find(params[:id]), status: :ok
    end
end
