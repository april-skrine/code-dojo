class QuizzesController < ApplicationController

    def index
        render json: Quiz.all, status: :ok
    end

    def show
        render json: Quiz.find(params[:id]), status: :ok
    end
end
