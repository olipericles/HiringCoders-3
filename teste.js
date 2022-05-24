int[] array = {1,2,3,4,5,6,7,8,9,73};

boolean verificaPrimo(int n) { 
    for (int i = 2; i < n; i++) if (n % i == 0) return false; return true; 
}


for(int i=0;i<array.length;i++){ if(verificaPrimo(array[i]))
System.out.println(array[i]);
}
