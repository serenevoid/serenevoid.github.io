---
title: "Rate Limiting an API"
description: "A small post about how API endpoints are protected against huge traffic."
pubDate: 2023-03-20
tags: ["web"]
---
> What is meant by API Rate Limiting? How can we implement this?

This was the question I was asked while attending an interview for a fullstack 
developer role.

## What is API Rate Limiting?

Limiting the access to the API as per predefined rules made by the API owner is 
called **API rate limiting**. Rate limiting is applied to almost all API end points
in the form of hits/period or by reducing bandwidth. If a user/bot tries to access 
this API a lot within a certain time frame, then the server returns 
"429 - Too Many Requests."

## Why should we Rate Limit an API endpoint in the first place?

Assume that you own an API which people start to recognise. You gain more users 
for your API and the traffic to your API endpoints increase. Slowly you'll start 
to recognise that the performance of your API starts to detereorate as the number 
of users grow higher. Some users will start to consume your API in a faster rate 
using custom scripts or bots which results in some other users getting their API 
requests unanswered. This would impact your API endpoint pretty badly. 

API Rate Limiting prepares your server to handle this issue in a proper way. We 
either limit the **number of transactions** or the **amount of data consumed** in each 
transaction.

## Implementation details
There are different ways to implement rate limiting for an API endpoint.

1. **Throttling** - This method reduces the bandwidth used for a particular user as 
per the rules specified for that user. This helps save a lot of bandwidth to serve 
other users if required.
2. **Request Queues** - A queue stores the requests which the API endpoints recieve
and it serves the requests in a FIFO manner. This could leak some requests if the 
number of requests exceed the queue's limit.
3. **Fixed Window** - This method keeps a simple counter for storing the number of 
times a particular user has hit an endpoint and it blocks the requests from that user 
if the number of requests exceed the limit.
4. **Sliding Logs** - A time-stamped log is stored for each requests that the API 
endpoint recieves and then the number of times the user accessed the API is calculated 
from the time-stamps.

Usually the Fixed Window and Sliding Logs are used together in a practical situation 
because Fixed window has faster operation times and logs are useful for analyzing 
the endpoint usage.

### Algorithm for Fixed Window

This was the next question I had to solve. 

My go-to response was to store a user's ID and a counter associated with that user.
Every time the user accesses this API endpoint, increment the counter by one and 
block the access when the user crosses the limit. Then run a timered task which 
resets the timer after 'x' period. This way we can confirm that the user will not 
access the API after a limit within the same period.

This algorithm works but it is not scalable. Imagine running a timered task which 
has to run through millions of users' counter variable and reset it. This is very 
inefficient and will obviously waste a lot of resources.

The optimal solution is to store the current time stamp along with the counter and 
store the last time the user accessed this API. The next time when the user tries 
to access this API, we check if the difference between the previous time stamp and 
the current time is greater than the period. If it is greater we reset the counter,
or else we'll just increment the counter. This approach only ran for the users which 
accessed the API and not everyone else. This also prevented computational spikes at 
regular intervals which prevents resource wastage.

The below code limites the number of Forward function calls on a per second basis.

```python
from time import time, sleep

class FixedWindow:

    def __init__(self, capacity, forward_callback, drop_callback):
        self.current_time = int(time())
        self.allowance = capacity
        self.capacity = capacity
        self.forward_callback = forward_callback
        self.drop_callback = drop_callback

    def handle(self, packet):
        if (int(time()) != self.current_time):
            self.current_time = int(time())
            self.allowance = self.capacity

        if (self.allowance < 1):
            return self.drop_callback(packet)

        self.allowance -= 1
        return self.forward_callback(packet)


def forward(packet):
    print("Packet Forwarded: " + str(packet))


def drop(packet):
    print("Packet Dropped: " + str(packet))


throttle = FixedWindow(1, forward, drop)

packet = 0

while True:
    sleep(0.2)
    throttle.handle(packet)
    packet += 1
```
