class Clan < ApplicationRecord
    has_many :users
    has_many :user_quizzes, through: :users

    def clan_points
        self.user_quizzes.sum(:points_scored)
    end

    def self.all_clan_points
        clan_totals = Clan.all.map{|c| {c.clan_name => c.clan_points}}
        return clan_totals
    end
end
