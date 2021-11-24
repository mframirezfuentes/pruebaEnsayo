select distinct p.product_id, p.product_name, s.quantity
from stocks as s
inner join products as p on p.product_id=s.product_id
inner join categories as c on c.category_id=p.category_id
where c.category_name='Electric Bikes' 
order by p.product_name