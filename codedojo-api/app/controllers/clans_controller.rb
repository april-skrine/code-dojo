class ClansController < ApplicationController

    def index
        render json: Clan.all, status: :ok 
    end
    
    def show
        render json: Clan.find(params[:id]), status: :ok
    end
    
end
