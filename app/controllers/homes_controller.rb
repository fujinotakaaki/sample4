class HomesController < ApplicationController
  def new
    @icon = Icon.new
  end

  def create
    @icon = Icon.new( icon_params )
    if @icon.save then
      flash[:success]=%q?We recieved your icon. Thank you!!?
      redirect_to homes_path
    else
      render :new
    end
  end

  def index
    @icons = Icon.all
  end

  def destroy
    icon = Icon.find(params[:id])
    flash[:destroy]=%q?selected icon deleted successfully!!?
    icon.destroy
    redirect_to homes_path
  end

  def game
  end

  private
  def icon_params
    params.require(:icon).permit(:name, :introduction)
  end
end
