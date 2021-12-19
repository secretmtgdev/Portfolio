import DataStructurePageWrapper from "./DataStructurePageWrapper";
import Latex from 'react-latex';

const HashMap = () => {
    let name = "HashMap";
    let runTimes = new Map<string, React.ReactNode>([
        ["Access", <Latex>$O(1)$</Latex>],
        ["Search", <Latex>$O(1)$</Latex>],
        ["Insertion", <Latex>$O(1)$</Latex>],
        ["Deletion", <Latex>$O(1)$</Latex>],
    ]);

    let commonApplications = [
        "Storing cookie information on the browser",
        "Filing user information based off an ID",
        "Catalog of a book",
        "Implementation in a database"
    ];

    let implementation = (
        <code className="code-multiline">
            class Pair{'<'}K, V{'>'} {'{'}
<br/>   public K key;
<br/>   public V value;
<br/>
<br/>   public Pair(K key, V value) {'{'}
<br/>      this.key = key;
<br/>      this.value = value;
<br/>   {'}'}
<br/>{'}'}
<br/>
<br/>class Bucket {'{'}
<br/>   private List{'<'}Pair{'<'}Integer, Integer{'>'}{'>'} bucket;
<br/>
<br/>   public Bucket() {'{'}
<br/>      this.bucket = new LinkedList{'<'}Pair{'<'}Integer, Integer{'>'}{'>'}();
<br/>   {'}'}
<br/>
<br/>   public Integer get(Integer key) {'{'}
<br/>      for(Pair{'<'}Integer, Integer{'>'} pair : this.bucket) {'{'}
<br/>         if(pair.key.equals(key)) {'{'}
<br/>            return pair.value;
<br/>         {'}'}
<br/>      {'}'}
<br/>      return -1;
<br/>   {'}'}
<br/>
<br/>   public void update(Integer key, Integer value) {'{'}
<br/>      boolean found = false;
<br/>      for(Pair{'<'}Integer, Integer{'>'} pair : this.bucket) {'{'}
<br/>         if(pair.key.equals(key)) {'{'}
<br/>            found = true;
<br/>            pair.value = value;
<br/>            break;
<br/>         {'}'}
<br/>      {'}'}
<br/>
<br/>      if(!found) {'{'}
<br/>         this.bucket.add(new Pair{'<'}Integer, Integer{'>'}(key, value));
<br/>      {'}'}
<br/>   {'}'}
<br/>
<br/>   public void remove(Integer key) {'{'}
<br/>      for(Pair{'<'}Integer, Integer{'>'} pair : this.bucket) {'{'}
<br/>         if(pair.key.equals(key)) {'{'}
<br/>            this.bucket.remove(pair);
<br/>            break;
<br/>         {'}'}
<br/>      {'}'}
<br/>   {'}'}
<br/>{'}'}
<br/>
<br/>class HashMap {'{'}
<br/>   private int key_space;
<br/>   private List{'<'}Bucket{'>'} hash_table;
<br/>
<br/>   public HashMap() {'{'}
<br/>      this.key_space = 2069;
<br/>      this.hash_table = new ArrayList{'<'}Bucket{'>'}();
<br/>      for(int i = 0; i {'<'} this.key_space; i++) {'{'}
<br/>         this.hash_table.add(new Bucket());
<br/>      {'}'}
<br/>   {'}'}
<br/>
<br/>   public void put(int key, int value) {'{'}
<br/>      int hash_key = hash(key);
<br/>      this.hash_table.get(hash_key).update(key, value);
<br/>   {'}'}
<br/>
<br/>   public int get(int key) {'{'}
<br/>      int hash_key = hash(key);
<br/>      return this.hash_table.get(hash_key).get(key);
<br/>   {'}'}
<br/>
<br/>   public void remove(int key) {'{'}
<br/>     int hash_key = hash(key);
<br/>     this.hash_table.get(hash_key).remove(key);
<br/>   {'}'}
<br/>
<br/>   private int hash(int key) {'{'}
<br/>      return key % this.key_space;
<br/>   {'}'}
<br/>{'}'}
    </code>
    );

    return (
        <DataStructurePageWrapper name={name} implementation={implementation} runTimes={runTimes} commonApplications={commonApplications}>
        </DataStructurePageWrapper>
    )
}

export default HashMap;