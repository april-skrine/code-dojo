class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.references :question, null: false, foreign_key: true
      t.string :answer_text
      t.boolean :correct

      t.timestamps
    end
  end
end
