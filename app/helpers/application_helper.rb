module ApplicationHelper
  #重複ありの大文字小文字英数字の文字列を返す
  def random_strings( length = 1 )
    arr = [('a'..'z'), ('A'..'Z'),('0'..'9')].map(&:to_a).flatten
    (0...length).map{arr[rand(62)]}.join
  end
end
