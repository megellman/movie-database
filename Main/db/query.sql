SELECT movies.movie_name AS movie, reviews.review
FROM movies
LEFT JOIN reviews
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;

-- +------------------+--------------------------------------------------------------------------------+
-- | movie            | review                                                                         |
-- +------------------+--------------------------------------------------------------------------------+
-- | Lion King        | Zazu is underrated. Give that hornbill a sequel!                               |
-- | Lion King        | Scar is the lion everyone loves to hate                                        |
-- | Lion King        | Hakuna matata                                                                  |
-- | Parasite         | NULL                                                                           |
-- | The Godfather    | I'm gonna make him an offer you can't refuse, watch this movie                 |
-- | The Wizard of Oz | The tin man gave a metallic, hollow performance                                |
-- | The Wizard of Oz | Those flying monkeys are nightmare fuel!                                       |
-- | West Side Story  | Ten years of ballet and three years of tap to join a gang in this neighborhood |
-- +------------------+--------------------------------------------------------------------------------+