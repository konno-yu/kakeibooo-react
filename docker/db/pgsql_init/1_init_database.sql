DROP TABLE IF EXISTS receipts;

-- レシート単位の食費テーブル
CREATE TABLE receipts (
    id SERIAL NOT NULL,
    purchase_date DATE NOT NULL,
    store_name VARCHAR(100) NOT NULL,
    expense INTEGER NOT NULL
);