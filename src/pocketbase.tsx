import PocketBase from "pocketbase";

const pb = new PocketBase("http://192.168.0.100:8090"); // Replace with your PocketBase URL
pb.autoCancellation(false);
export default pb;
