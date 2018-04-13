require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    context 'with invalid params' do
      it "validates the presence of the user's username and password" do
        post :create, params: { user: { username: 'Batman@supermansucks.net', password: '' }}
        expect(:errors).to be_present
      end
    end

    it 'validates that the password is at least 6 charcters long' do
      post :create, params: { user: { username: 'Superman@batmansucks.org', password: 'short'}}
      expect(:erros).to be_present
    end
  end

  context 'with valid params' do
    it 'logs in the user' do
      post :create, params: { user: { username: 'Batman@supermansucks.net', password: 'password'}}
      user = User.find_by_username('Batman@supermansucks.net')

      expect(session[:session_token]).to eq(user.session_token)
    end
  end
end
