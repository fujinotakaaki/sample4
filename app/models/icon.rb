class Icon < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :introduction, presence: true, length: { maximum: 200 }
end
