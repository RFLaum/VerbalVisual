module MainHelper
  #in a real site, we would have different urls to buy different products
  #In fact, rather than passing a url to this function, we would pass the
  #product model object, which we would then use with a named route (defined in
  #routes.rb) to generate the url
  def buy_text(money, url)
    # number_with_delimiter(money, delimiter: ',') +
    # " [ #{raw(link_to 'BUY', url)} ] "
    raw "USD #{number_with_delimiter(money, delimiter: ',')} [ #{link_to 'BUY', url} ]"
  end

  def buy_form(money)
    raw "USD #{number_with_delimiter(money, delimiter: ',')} #{submit_tag 'BUY'}"
  end

  def make_img_array(*nums)
    nums.map { |num| sprintf('%02d', num) + '.jpg' }
  end
end
