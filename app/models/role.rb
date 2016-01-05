class Role < ActiveRecord::Base
  has_many :users
  has_many :members
  has_many :project_roles

  serialize :permissions, Hash

  translates :name, fallbacks_for_empty_translations: true
  accepts_nested_attributes_for :translations
end
