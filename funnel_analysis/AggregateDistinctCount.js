db.getCollection("log").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			"action": {$exists: true}
			}
		},

		// Stage 2
		{
			$group: {
			_id: "$action",
			count:{$sum:1}
			}
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
