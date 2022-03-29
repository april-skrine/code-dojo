class ClansController < ApplicationController

    skip_before_action :authorized_user, only: :index

    def index
        render json: Clan.all_clan_points, 
            status: :ok 
    end
    
    def show
        render json: Clan.find(params[:id]), status: :ok
    end
    
end
