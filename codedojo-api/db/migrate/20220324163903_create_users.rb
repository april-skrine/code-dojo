class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.references :clan, null: false, foreign_key: true
      t.text :bio

      t.timestamps
    end
  end
end
