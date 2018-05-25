update shelfie
set name = $2, price = $3, url = $4
where id = $1;
select * from shelfie;