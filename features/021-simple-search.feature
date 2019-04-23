Feature: 021 - Fill form

       @contact
       Scenario Outline: As a user I can fill questionnare
              Given User entered contact page
              When User fills <Name>, <Email> and <Message>
              Then The succesfull message is displayed.
              Examples:
                     | Name   | Email                      | Message |
                     | Jan    | 5waleed.iftikharh@vip.cool | test1   |
                     | Tomasz | 5waleed.iftikharh@vip.cool | test2   |
                     | Damian | 5waleed.iftikharh@vip.cool | test3   |
                     | Damian | 5waleed.iftikharh@vip.cool | test4   |
                     | Damian | 5waleed.iftikharh@vip.cool | test5   |
                     | Damian | 5waleed.iftikharh@vip.cool | test6   |
                     | Damian | 5waleed.iftikharh@vip.cool | test7   |
                     | Damian | 5waleed.iftikharh@vip.cool | test8   |
                     | Damian | 5waleed.iftikharh@vip.cool | test9   |
                     | Damian | 5waleed.iftikharh@vip.cool | test10  |
                     | Damian | 5waleed.iftikharh@vip.cool | test11  |




