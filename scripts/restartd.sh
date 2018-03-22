pkill npm 

for i in 3 2 1;
do
  echo "Restarting in $i seconds"
  sleep $i
done

nohup npm run start & disown
