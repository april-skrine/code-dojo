class Clan < ApplicationRecord
    has_many :users
    has_many :user_quizzes, through: :users

    def clan_points
        self.user_quizzes.sum(:points_scored)
    end

    def all_clan_points
        Clan.all.map do |c|
            puts "Hi"
            # c.clan_points
        end
    end
end

# self.actors.map do |n|
#     "#{n.first_name} #{n.last_name}"
# end
