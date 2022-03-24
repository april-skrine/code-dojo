class CreateClans < ActiveRecord::Migration[7.0]
  def change
    create_table :clans do |t|
      t.string :clan_name
      t.string :slogan

      t.timestamps
    end
  end
end
