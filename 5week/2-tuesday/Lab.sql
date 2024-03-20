CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) UNIQUE,
	password TEXT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	date_joined TIMESTAMP,
	profile_is_public BOOLEAN
);

CREATE TABLE recipes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	title VARCHAR(50),
	description VARCHAR(170),
	is_published BOOLEAN,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE Ingredients (
	id SERIAL PRIMARY KEY,
	ingredient_name VARCHAR(50)
);

CREATE TABLE instructions (
	id SERIAL PRIMARY KEY,
	step_number INTEGER,
	step_text VARCHAR(100),
	recipe_id INTEGER,
	FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

CREATE TABLE saved_recipes (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	recipe_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

CREATE TABLE recipe_ingredients (
	id SERIAL PRIMARY KEY,
	recipe_id INTEGER,
	ingredient_id INTEGER,
	count INTEGER,
	FOREIGN KEY (recipe_id) REFERENCES recipes(id),
	FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id)
);

CREATE TABLE Shopping_list (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	ingredient_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id)
);