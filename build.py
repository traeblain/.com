from sys import argv, exit
from subprocess import Popen, PIPE, call, STDOUT

thisfile, script, user, port = argv

pelican_status = call("pelican -t tbcom -s " + script + " -v src", shell=True, stderr=STDOUT)
if pelican_status != 0:
  exit('\nCRITICAL Error\n')

sitemap_status = call("call sitemap.bat", shell=True, stderr=STDOUT)

tree_chk = Popen("tree .\\output /A", shell=True, stdin=PIPE, stdout=PIPE)
tree = tree_chk.stdout.readlines()
tree = tree[3:]
tree = "".join(tree)
tree = tree.replace("\r\n", "\n")

tree_old = file('tree.txt')
tree2 = tree_old.read()
tree_old.close()

if tree != tree2:
  print "\nDirectory structure is not the same, Syncing directories!\n"
  tree_old = file('tree.txt', 'w')
  tree_old.write(tree)
  tree_old.close()
  dir_sync = call('rsync.exe -rv --chmod=u+rwx,g+rx,o+rx --include "*/" --exclude "*" output/ -e "ssh -p ' + port + '" ' + user + '@v.traebla.in:/home/' + user + '/www/blog', shell=True, stderr=STDOUT)
else:
  print "\nDirectory structure has not changed. Leaving directories alone!\n"

file_sync = call('rsync.exe -rlvzc --chmod=u+rw,g+r,o+r output/ -e "ssh -p ' + port + '" ' + user + '@v.traebla.in:/home/' + user + '/www/blog', shell=True, stderr=STDOUT)

print "\n\n\nYour website is now live!! LIVE I TELL YOU!!!\n\n"