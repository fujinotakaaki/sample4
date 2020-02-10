class HomesController < ApplicationController
  def new
    @icon = Icon.new
  end

  def create
    @icon = Icon.new( icon_params )
    if @icon.save then
      redirect_to homes_path, notice: "Your icon are recieved!! Thank you!!"
    else
      render :new
    end
  end

  def index
    @icons = Icon.all
  end

  def game
  end

  private
  def icon_params
    params.require(:icon).permit(:name, :introduction)
  end
end
