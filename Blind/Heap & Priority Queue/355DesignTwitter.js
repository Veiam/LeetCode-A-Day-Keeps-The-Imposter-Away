// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
// Implement the Twitter class:
// Twitter() Initializes your twitter object.
// void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
// List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
// void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
// void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

// Example 1:
// Input
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// Output
// [null, null, [5], null, null, [6, 5], null, [5]]

// Explanation
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2);    // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2);  // User 1 unfollows user 2.
// twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

// Constraints:
// 1 <= userId, followerId, followeeId <= 500
// 0 <= tweetId <= 104
// All the tweets have unique IDs.
// At most 3 * 104 calls will be made to postTweet, getNewsFeed, follow, and unfollow.

class Heap {
    constructor() {
        this.heap = [];
        this.length = 0;
    }

    insert(val) {
        this.heap.push(val);
        this.length++;
        moveUp(this.length - 1);
    }

    delete() {
        let val = this.heap.shift();
        moveDown(0);
        return val;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    moveUp(pos) {
        let parent = (pos - 1) >> 1;
        while (pos > 0 && this.heap[pos][0] > this.heap[parent][0]) {
            swap(parent, pos);
            pos = parent;
            parent = (pos - 1) >> 1;
        }
    }

    moveDown(pos) {
        let k = pos * 2 + 1;
        while (k < this.length - 1) {
            if (k + 1 < this.length - 1 && this.heap[k + 1][0] > this.heap[k][0]) {
                k++;
            }

            if (this.heap[pos][0] > this.heap[k][0]) {
                return;
            }

            swap(pos, k);

            pos = k;
            k = pos * 2 + 1;
        }
    }
}

var Twitter = function () {
    this.users = [];
    this.tweetCounts = 0;
};

var User = function (userId) {
    this.userId = userId;
    this.tweets = [];
    this.follows = new Set();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    let user = this.users[userId] || new User(userId);
    user.tweets.push([tweetId, this.tweetCounts]);
    this.tweetCounts++;
    this.users[userId] = user;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let user = this.users[userId] || new User(userId);
    let res = [];
    if (user.tweets.length) {
        res.push(...user.tweets);
    }
    for (let follow of user.follows.values()) {
        if (this.users[follow].tweets.length)
            res.push(...this.users[follow].tweets);
    }

    res.sort((a, b) => b[1] - a[1]);

    return res.map((a) => a[0]).slice(0, 10);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    let follower = this.users[followerId] || new User(followerId);
    let followee = this.users[followeeId] || new User(followeeId);
    follower.follows.add(followeeId);
    this.users[followerId] = follower;
    this.users[followeeId] = followee;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    let follower = this.users[followerId] || new User(followerId);
    let followee = this.users[followeeId] || new User(followeeId);
    follower.follows.delete(followeeId);
    this.users[followerId] = follower;
    this.users[followeeId] = followee;
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */