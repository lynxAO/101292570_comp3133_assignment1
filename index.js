const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB =
	"mongodb+srv://comp3133_assignment1:HlUmj5mk54boSIUr@cluster0.qax1zpt.mongodb.net/?retryWrites=true&w=majority";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(MONGODB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		return server.listen({ port: 8090 });
	})
	.then((res) => {
		console.log("Server running at " + res.url);
	});