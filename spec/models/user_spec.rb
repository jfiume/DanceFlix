require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do
    it 'does not save passwords to the database' do
      User.create!(username: 'Batman@supermansucks.net', password: 'Dark_Knight')
      user = User.find_by_username('Batman@supermansucks.net')
      expect(user.password).not_to be('password')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'Batman@supermansucks.net', password: 'Dark_Knight')
    end
  end

  describe 'session token' do
    it 'assigns a session_token if one is not given' do
      bruce = User.create(username: 'Batman@supermansucks.net', password: 'Dark_Knight')
      expect(bruce.session_token).not_to be_nil
    end
  end

  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should have_many(:favorites) }
  it { should have_many(:views) }
end
