# add-to-cart

I learnt to use Firebase and import the database functions into JS. Push,Remove,onValue and ref. Ref helps identify the location of data in database. ref(database, "movies").

A quirk I encountered, the appSettings object only accepts the word databaseURL as a key. I tried the word url as a key and it returned an error.

A JS means of manipulating data was transferring the array of object entries from the onValue function to the appendListToHtml function. Passing the item(array) as an argument into appendListToHtml() and splitting it up into item and Id in the appendListToHtml function. I really like to see data from one function rearranged for another purpose in a different scope.     
