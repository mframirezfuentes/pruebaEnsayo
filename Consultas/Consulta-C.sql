select c.category_id,c.category_name, count(c.category_id) as cantidad
from categories as c
inner join products as p on p.category_id=c.category_id
group by c.category_id
order by cantidad desc