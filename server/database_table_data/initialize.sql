CREATE TABLE chat_data (
    user VARCHAR(255),
    cohort INT NOT NULL,
    unit VARCHAR(5) ,
    lesson VARCHAR(255),
    _session INT NOT NULL,
    chat_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    question VARCHAR(2000),
    star BOOLEAN NOT NULL DEFAULT 0
)


CREATE TABLE chat_context (
    101_context TEXT,
    211_context TEXT,
    311_context TEXT,
    411_context TEXT
)