This problem is know as Clock angle problem where we need to find angle between hands of an analog clock at .Examples:

Input:  h = 12:00, m = 30.00
Output: 165 degree

Input:  h = 3.00, m = 30.00
Output: 75 degree

The idea is to take 12:00 (h = 12, m = 0) as a reference. Following are detailed steps.1) Calculate the angle made by hour hand with respect to 12:00 in h hours and m minutes.
2) Calculate the angle made by minute hand with respect to 12:00 in h hours and m minutes.
3) The difference between two angles is the angle between two hands.How to calculate the two angles with respect to 12:00? 
The minute hand moves 360 degree in 60 minute(or 6 degree in one minute) and hour hand moves 360 degree in 12 hours(or 0.5 degree in 1 minute).  In h hours and m minutes, the minute hand would move (h*60 +  m)*6 and hour hand would move (h*60 + m)*0.5.Output:
90
75
Exercise: Find all times when hour and minute hands get superimposed.This article is contributed by Ashish Bansal. Please write comments if you find anything incorrect, or you want to share more information about the topic discussed aboveTags: MathematicalAlgo