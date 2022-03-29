class ClansController < ApplicationController

    def index
        render json: Clan.all, 
            only: :clan_name, 
            include: [:users, :user_quizzes], 
            status: :ok 
    end
    
    def show
        render json: Clan.find(params[:id]), status: :ok
    end
    
end
