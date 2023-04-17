#### How this will be merged
The main development of `ESP-IDF` is on Espressif Gitlab (internal). GitHub repository is only public mirror of Gitlab.

After you open the Pull Request, there will probably be some discussion in the comments field of the request itself.

Once the Pull Request is ready to merge, it will first be merged into our internal git system for in-house automated testing.

If this process passes, it will be merged onto the public github repository.


#### The process of your contribution review
1. Once the user contributes a new PR on GitHub, the GitHub sync. bot will automatically trigger the creation of a Jira ticket in `IDFGH` project
2. The default project assignee of the issue will manually check within one working day after the Jira ticket is created and report back to contributor that "Thanks for reporting, we will evaluate"
3. The default project assignee of the issue will check the changes and found out which lines and who are the owner of these lines, and distribute the Jira ticket to the changes owner and also copy maintainer of components on the same day
4. Once assigned the issue, the assignee should evaluate the contribution, triage tasks via assigning priority, i.e. Highest, High, Medium, Low, and application development engineer could reply in the specific task and ask to upgrade priority if they have same/similar issue
5. Work out in local branch
6. Work out in Gitlab Merge Request
7. Merge Gitlab Merge request -> public merge GitHub
