select b.brand_id, b.brand_name, sum(s.quantity)
from stocks as s
inner join products as p on p.product_id=s.product_id
inner join brands as b on b.brand_id=p.brand_id
group by b.brand_id
order by  sum(s.quantity) desc