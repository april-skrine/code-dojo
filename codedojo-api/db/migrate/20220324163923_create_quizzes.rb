class CreateQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :quizzes do |t|
      t.string :quiz_name

      t.timestamps
    end
  end
end
