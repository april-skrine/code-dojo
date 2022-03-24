class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorized_user

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def current_user
        User.find_by(id:session[:current_user])
    end

    def authorized_user
        render json: {error: "Not authorized, sensei!"}, status: :unauthorized unless current_user
    end

    private

    def render_unprocessable_entity(invalid)
		render json: {error: invalid.record.errors}, status: :unprocessable_entity
	end

    def not_found(error)
        render json: {errors: "#{error.model} not found"}, status: :not_found
    end

end
