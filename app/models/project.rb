class Project < ActiveRecord::Base
	belongs_to :branch
	has_many :project_locations
  has_many :locations, through: :project_locations

	has_many :project_donors
  has_many :donors, through: :project_donors

  has_many :project_partners
  has_many :partners, through: :project_partners

	validates :name, uniqueness: true 
	validates :name, :goal, :budget, presence: true
 	validates :budget, numericality: true 
end