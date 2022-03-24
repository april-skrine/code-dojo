class UserQuizzesController < ApplicationController
    def index
        render json: UserQuiz.all, status: :ok
    end

    def show
        render json: UserQuiz.find!(params[:id]), status: :ok
    end

    def create
        user_quiz = UserQuiz.create!(userquiz_params)
        render json: user_quiz, status: :created
    end

    def destroy
        user_quiz = UserQuiz.find!(params[:id])
        user_quiz.destroy
        head :no_content
    end

    private

    def userquiz_params
        params.permit(:points_scored, :user_id, :quiz_id)
    end
end
