const initialState = {
  service: {
    allServiceList: [
      "Mail",
      "Trello",
      "Github",
      "Facebook",
      "Twitter",
      "Instagram",
      "Slack"
    ],
    serviceList: []
  },
  trigger: {
    Trello: [],
    Facebook: [],
    Twitter: [
      {
        heading: "New tweet by you",
        content: "This trigger fires every time you post a new tweet"
	  },
	  {
        heading: "New tweet by you with hashtag",
        content: "This trigger fires every time you post a new tweet with specific hashtag"
	  },
	  {
        heading: "New follower",
        content: "This trigger fires every time a new user starts following you"
	  },
    ],
    Instagram: [],
    Github: [
      {
        heading: "Issue Raised in repo",
        content: "When an issue is raised in specified repo in github"
      }
    ],
    Slack: [
      {
        heading: "Recieved a message",
        content: "When you get a DM from some specified username"
      }
    ],
    Mail: [
      {
        heading: "Get a mail",
        content: "When you get a mail from some specified address"
      }
    ]
  },
  action: {
    Mail: {
      Mail: [
        {
          heading: "Get a mail",
          content: "When you get a mail from some specified address"
        }
      ]
    },
    Twitter: [],
    Facebook: [],
    Github: [],

    //The following section means that for action service "slack" and for trigger service "mail", we have the following card for applets
    //That is if you choose service "mail" in step1  and "slack" in step 3, then the action card would have this cards available
    Slack: {
      Github: [
        {
          heading: "Send message via Slack",
          content: "Send a message to specified Slack channel or user"
        }
      ],
      Twitter: [
        {
          heading: "Send message via Slack",
          content: "Send a message to specified Slack channel or user"
        }]
    },
    Trello: {
      Github: [
        {
          heading: "Make a card in trello",
          content: "Make a card in your trello board with some message"
        }
      ],
      Twitter: [
        {
          heading: "Make a card in trello",
          content: "Make a card in your trello board with some message"
        }
      ]
    },
    Mail: {
      Github: [
        {
          heading: "Send email via Gmail",
          content: "Send a message to specified email"
        }
      ],
      Twitter: [
        {
          heading: "Send email via Gmail",
          content: "Send a message to specified email"
        }
      ]
    }
  },
  create: {
    appletList: []
  },
  activity: {
    activityList: []
  },
  applet: {
    appletList: [],
    myApplet: []
  }
};

export default initialState;
