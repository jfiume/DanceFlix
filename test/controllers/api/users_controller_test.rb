require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test 'POST #create' do
    it "validates the presence of the user's username and password" do
      post :create, params: { user: {username: 'Batman@supermansucks.net', password: ''}}
      expect(response).to status(422)
    end
  end
end
