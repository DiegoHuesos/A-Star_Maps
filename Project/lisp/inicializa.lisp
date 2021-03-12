(load "./lisp/adj.txt")
(setq adj (make-hash-table))
(loop for lst in adjInicial do (setf (gethash (car lst) adj) (cdr lst)))

(load "./lisp/coords.txt")
(setq coords (make-hash-table))
(loop for lst in coordsInicial do (setf (gethash (car lst) coords) (cadr lst)))

;; creo la funcion heuristica y la funcion distancia
;; el costo esta en la lista de adj
(defun heuristica (a b) 
    (setq va (gethash a coords))
    (setq vb (gethash b coords))
    (psetq va (- (car va) (car vb))  vb (- (cadr va) (cadr vb)))
    (sqrt (+ (* va va) (* vb vb)))
)

(defun tostr (lst)
	(apply #'concatenate 'string 
		(mapcar #'(lambda (sim) (concatenate 'string (string sim) " ")) lst)
	)
)

(load "./lisp/pq.txt")
(load "./lisp/aestrella.txt")
(load "./lisp/query.txt")
;;; (load "/Users/CD/Desktop/6semestre/IA/Lisp/inicializa.txt")

 