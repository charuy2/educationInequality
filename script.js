var quoteList = ["In Niger, Chad and Liberia, estimates suggest that less than half of the school-aged children attend primary school.", "In the majority of developing countries, net enrollment rates are higher than attendance rates. This reflects the fact that many children who are officially enrolled, do not regularly attend school.", "Since the 1870's there has generally been a strong upward trend in the gender ratios across all world regions, which indicates that the inequality between men and women in access to education has been declining.", "In several low-income countries households contribute proportionally more to primary education than to higher levels", " Data shows that our world will be inhabited by more and more educated people: while in 1970 there were only around 700 million people in the world with secondary or post-secondary education, by 2100 this figure is predicted to be 10 times larger.", "Thus, further reductions in education inequality are still to be expected within developing countries; and if the expansion of global education can be continued, we can speed up this important process of global convergence."];


var quote = document.getElementById("quote");

var count = 0;


myBtn.addEventListener("click", displayQuote);


function displayQuote() {

  console.log(count);  
  quote.innerHTML = 
  quoteList[count];
  count++; 
  if(count == quoteList.length) {
    count = 0;
  }
}
