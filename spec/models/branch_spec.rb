require 'rails_helper'

RSpec.describe Branch, type: :model do
	it { should validate_presence_of :name }
	it { should validate_uniqueness_of  :name }

	it { should have_many :projects}
  it { should have_many :members}
  it { should belong_to :state}
end
